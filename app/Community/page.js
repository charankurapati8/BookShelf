import Image from 'next/image';
import communityimg from '@/assets/icons/community.png'
import groupimg from '@/assets/icons/group.png'
import exploreimg from '@/assets/icons/explore.png'
import classes from './page.module.css';
export default function Community() {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.headerh1}>
          One shared passion : Books
        </h1>
        <p>Join our community explore learning</p>
      </header>
      <main className={classes.main}>
        <ul className={classes.perks}>
            <li>
            <p>Find interesting books in the community</p>
            <Image src={communityimg} alt='a list of books'/>
        
            </li>
            <li>
            <p>Research with the people </p>
              <Image src={groupimg} alt='group of people in a community' />
              </li>
              <li>
                <p>Explore the knowledge to everyone</p>
                <Image src={exploreimg} alt='explore knowledge'/>
              </li>
        </ul>
      </main>

    </>
  );
}