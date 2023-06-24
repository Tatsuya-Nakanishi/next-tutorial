import styles from '@/styles/Home.module.css';
import { Purple_Purse } from 'next/font/google';
import Image from 'next/image'
export default function Headline(props) {
    return (
        <div>
            <p>
                {props.title}
                <code className={styles.code}>pages/{props.page}.js</code>
            </p>
        </div>
    );
}