import { EventState } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: EventState = {
    imageUrl: '/placeholder.svg',
    title: '',
    description: '',
    link: '',
    linkText: 'Read more',
    openInNewTab: false,
};

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        updateEvent: (state, action: PayloadAction<Partial<EventState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateEvent } = eventSlice.actions;
export default eventSlice.reducer;