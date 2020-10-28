import Head from 'next/head'
import Link from 'next/link'
import { withTranslation } from '../i18n'
import PropTypes from 'prop-types'

import styles from '../styles/Home.module.css'

const Home = ({t}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {t('SEO with Nextjs.')}
        </h1>
        <h2>* Pages based routing</h2>
        <Link href="/posts"><a>Go to post list page</a></Link>
        <Link href="/redux-example"><a>Go to redux example</a></Link>
      </main>
    </div>
  )
}


Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
