import styles from './layout.scss'

export default function Layout({ children }) {
    return (
        <>
            <div className='layout-main'>
                <main>{children}</main>
            </div>
            <footer className='footer'>
                <a
                    href='https://nikhilkadyan.com'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <img src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
                    </span>
                </a>
            </footer>
        </>
    )
}
