import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>I am a passionate full-stack web developer dedicated to giving best user experience and I have a background in marketing and auditing and have a love for problem-solving. My past work and education have provided me with foundations in critical thinking and business mindset that help me as a developer. </p>
        <p>During my 2.5 years as a digital marketing specialist at 22 International, I managed 3 Shopify stores, coordinated the social media campaigns, performed data analysis and increased social media engagement. I worked as audit trainee at KPMG for their vacation work. This experience kindled my passion for website development as I learnt insight on the users and data and taught me to always keep the user experience and interaction in mind.</p>
        <p>To gain more coding experience, I completed Udacity's Full Stack Web Development Nanodegree program, which has taught me SQL and Data Modeling for the Web, API Development and Documentation, Identity Access Management, Server Deployment and Containerisation to develop my own web applications. And a Full Stack developer Bootcamp with HyperionDev to further my developer skills in HTML, CSS, JavaScript, Java, PHP, SQL, Wordpress and React.</p>
        <p>I am looking forward to joining SovTeh as this programme is one that is practical and were I would have the opportunity to work on projects that will that’ll not only grow my portfolio but have an impact on the world as Sovetch focuses on innovation and working on their clients businesses into thriving entities. The programme also gives opportunity to professional development that are not limited to software development and this aligns with my values as I intend to grow my software development skills while using other skills from other industries to build better services for people. 
I hope to bring to SovTech my fresh perspective as a developer with a marketing and finance background and my adaptability and diligence as a career-changer. </p>
        <p>
          (Take a look at some of my projects on{' '}
          <a href="https://github.com/Ditebogo50?tab=repositories"> my Github</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
         <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}>{title}</Link>
  <br />
  <small className={utilStyles.lightText}>
    <Date dateString={date} />
  </small>
</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}