import { EventState, Props } from '../types';
import { useDispatch } from 'react-redux';
import { updateEvent } from '../store/eventSlice';
import { Button, Form, Input, Modal, Switch } from 'antd';
import styles from '../styles/SettingsForm.module.css';

function SettingsForm({ onClose }: Props) {
    const dispatch = useDispatch();

    const handleFinish = (values: EventState): void => {
        dispatch(updateEvent(values));
        onClose();
    };

    return (
        <Modal open title="Настройки события" onCancel={onClose} footer={null}>
            <Form<EventState> layout="vertical" onFinish={handleFinish}>
                <Form.Item<EventState> label="Изображение (URL)" name="imageUrl">
                    <Input />
                </Form.Item>

                <Form.Item<EventState> label="Заголовок" name="title">
                    <Input />
                </Form.Item>

                <Form.Item<EventState> label="Описание" name="description">
                    <Input.TextArea rows={3} />
                </Form.Item>

                <Form.Item<EventState> label="Подробнее (URL)" name="link">
                    <Input />
                </Form.Item>

                <Form.Item<EventState> label="Текст кнопки" name="linkText">
                    <Input placeholder="Read more" />
                </Form.Item>

                <Form.Item<EventState> label="Открыть в новой вкладке" name="openInNewTab" valuePropName="checked">
                    <Switch />
                </Form.Item>

                <div className={styles.buttons}>
                    <Button type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                    <Button onClick={onClose} className={styles.cancel}>
                        Отмена
                    </Button>
                </div>
            </Form>
        </Modal>
    );
}

export default SettingsForm