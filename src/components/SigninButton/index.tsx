import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true

  return isUserLoggedIn ? (
    <button type="Button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      Dev Joanderson
      <FiX color="#737380" className="{styles.closeIcon}" />
    </button>
  ) : (
    <button type="Button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Singn in with Github
    </button>
  )
}
