import styles from './styles.module.scss';

interface SubscribeButtonProp {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProp) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
