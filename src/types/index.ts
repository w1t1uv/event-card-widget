export interface EventState {
    imageUrl?: string;
    title?: string;
    description?: string;
    link?: string;
    linkText?: string;
    openInNewTab?: boolean;
}

export interface Props {
    onClose: () => void;
}