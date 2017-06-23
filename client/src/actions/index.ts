export const SHOW_LABEL_NAME = 'SHOW_LABEL_NAME';
export type SHOW_LABEL_NAME = typeof SHOW_LABEL_NAME;

export interface ShowLabelName {
    type: SHOW_LABEL_NAME;
}

export function showLabelName() {
    return {
        type: SHOW_LABEL_NAME,
    };
}

export type LabelNameAction = ShowLabelName;