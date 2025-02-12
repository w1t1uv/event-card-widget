import { Button, Card, Image, Typography } from 'antd';
import styles from '../styles/EventCard.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SettingsForm from './SettingsForm';
import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';

function EventCard() {
    const [isEditing, setIsEditing] = useState(false);
    const event = useSelector((state: RootState) => state.event);

    return (
        <div className={styles.container}>
            <Card
                className={styles.card}
                cover={<Image src={event.imageUrl} alt="Event" />}
                actions={[
                    <EditOutlined key="edit" onClick={() => setIsEditing(true)} />,
                ]}
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

            {isEditing && <SettingsForm onClose={() => setIsEditing(false)} />}
        </div>
    )
}

export default EventCard