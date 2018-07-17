import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

// Dummy DATA 추후 DB 자료와 교체
// 먼저 자료구조를 정의
const books = [
  { title: "하루3분 네트워크 교실", author: "아미노 에이지" },
  { title: "You Don't know JS", author: "카일 심슨" },
  { title: "함수형 자바스크립트", author: "루이스 아텐시오" }
];

// 쿼리 정리, Book 배열 정의
const typeDefs = `
  type Query {
    books : [Book]
  }
  type Book {
    title: String
    author: String
  }
`;
const schema = makeExecutableSchema({
  typeDefs
});

const app = express();

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(3000, () => {
  console.log("서버가 시작되었습니다!");
});
