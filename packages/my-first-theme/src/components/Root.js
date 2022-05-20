import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Page from "./Page";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <h1>Hello Frontity</h1>
      <pre>Current URL: {state.router.link}</pre>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us"> About Us</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost}>This is a post</Post>
          <Page when={data.isPage}>This is a page</Page>
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
