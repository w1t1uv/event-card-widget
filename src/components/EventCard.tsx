import { Button, Card, Image, Typography } from 'antd';
import styles from '../styles/EventCard.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function EventCard() {
    const event = useSelector((state: RootState) => state.event);

    return (
        <div className={styles.container}>
            <Card
                className={styles.card}
                cover={<Image src={event.imageUrl} alt={Event} />}
            >
                <Typography.Title level={4} className={styles.title}>
                    {event.title || 'No title'}
                </Typography.Title>
                <Typography.Paragraph className={styles.description}>
                    {event.description || 'No description available'}
                </Typography.Paragraph>

                {event.link && (
                    <Button
                        type="primary"
                        className={styles.button}
                        href={event.link}
                        target={event.openInNewTab ? '_blank' : '_self'}
                    >
                        {event.linkText || 'Read more'}
                    </Button>
                )}
            </Card>
        </div>
    )
}

export default EventCard