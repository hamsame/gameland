import styles from '../styles/LinkStyles.module.css'

const Footer = () => {
  return (
    <>
      <footer>
        <article className={styles.footer}>
          <h3>GAMERLAND</h3>
          <hr />
          <div className={styles.flexItemWrapped}>
            <div>
              <h4>Copyright © Gamerland 2021</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
                fugit amet nulla neque dicta error ea cumque ullam repudiandae
                quae illum id itaque distinctio, culpa nam minus corrupti
                voluptas perferendis!
              </p>
            </div>
            <span className={(styles.flexItem, styles.flexItemWrapped)}>
              <a href='#!'>
                <i className='lab la-facebook-square la-2x'></i>
              </a>
              <a href='#!'>
                <i className='lab la-twitter la-2x'></i>
              </a>
              <a href='#!'>
                <i className='lab la-instagram la-2x'></i>
              </a>
              <a href='#!'>
                <i className='lab la-youtube la-2x'></i>
              </a>
            </span>
          </div>
        </article>
      </footer>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/line-awesome/1.3.0/line-awesome/css/line-awesome.min.css'
        integrity='sha512-vebUliqxrVkBy3gucMhClmyQP9On/HAWQdKDXRaAlb/FKuTbxkjPKUyqVOxAcGwFDka79eTF+YXwfke1h3/wfg=='
        crossorigin='anonymous'
        referrerpolicy='no-referrer'
      />
    </>
  )
}

export default Footer
