// import styles from "./page.module.css";

import { Heading } from "./_components/core/typography/heading/Heading";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Heading as="h1" variant="secondary">Text</Heading>
    </main>
  );
}
