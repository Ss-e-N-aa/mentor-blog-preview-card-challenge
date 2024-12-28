import styles from './Card.module.css'
import cardImg from './../assets/illustration-article.svg'
import profileImg from './../assets/image-avatar.webp'

export default function Card() {
    return (
        <div className={styles.Container}>
            <div className={styles.CardContainer}>

                <img className={styles.CardImg} src={cardImg} alt="card image" />

                <div className={styles.TextsContainer}>
                    <button className={styles.CardTag}>Learning</button>
                    <p className={styles.CardDate}>Published 21 Dec 2023</p>
                    <h3 className={styles.CardTitle}>HTML & CSS foundations</h3>
                    <p className={styles.CardDescription}>
                        These languages are the backbone of every website, defining structure, content, and presentation.
                    </p>
                </div>

                <div className={styles.CardFooter}>
                    <img className={styles.ProfileImg} src={profileImg} alt="profile img" />
                    <h4 className={styles.ProfileName}>Greg Hooper</h4>
                </div>

            </div>
        </div>
    )
}
