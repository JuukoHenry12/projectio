import express from "express";
import { ApolloServer } from "apollo-server-express";
import {typeDefs,resolvers} from "./ghql"

const app = express();
const port = 4000;

const server = new ApolloServer({typeDefs,resolvers });
server.applyMiddleware({ app, path:"/api"})

app.listen(port);
console.log(`[app] is listen to the port ${port}`)