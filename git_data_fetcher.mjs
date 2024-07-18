import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

export const openSource = {
  githubConvertedToken: process.env.GITHUB_TOKEN,
  githubUserName: process.env.GITHUB_USERNAME,
};

const baseUrl = "https://api.github.com/graphql";

const headers = {
  "Content-Type": "application/json",
  Authorization: "bearer " + openSource.githubConvertedToken,
};

const query_contributions = {
  query: `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          totalIssueContributions
          totalRepositoryContributions
          contributionCalendar {
            totalContributions
          }
        }
        repositories(first: 100, privacy: PRIVATE) {
          nodes {
            languages(first: 100) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
  variables: {
    login: openSource.githubUserName,
  },
};

fetch(baseUrl, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(query_contributions),
})
  .then((response) => response.json())
  .then((data) => {
    if (!data.data || !data.data.user) {
      throw new Error("Failed to fetch user data");
    }

    const user = data.data.user;
    const contributionsCollection = user.contributionsCollection;
    const repositories = user.repositories.nodes;

    const totalContributionsEver =
      contributionsCollection.totalCommitContributions +
      contributionsCollection.totalPullRequestContributions +
      contributionsCollection.totalPullRequestReviewContributions +
      contributionsCollection.totalIssueContributions +
      contributionsCollection.totalRepositoryContributions;

    const totalPullRequests =
      contributionsCollection.totalPullRequestContributions;

    const languages = repositories.flatMap((repo) =>
      repo.languages.edges.map((edge) => edge.node.name)
    );
    const uniqueLanguages = [...new Set(languages)];

    const contributionsData = {
      totalContributionsEver: totalContributionsEver,
      totalPullRequests: totalPullRequests,
      allLanguages: uniqueLanguages,
    };

    console.log("contributions:", contributionsData);
    fs.writeFile(
      "./src/shared/opensource/contributions.json",
      JSON.stringify(contributionsData),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  })
  .catch((error) => console.log(JSON.stringify(error)));
