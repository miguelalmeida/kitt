import { IonButton, IonButtons, IonCol, IonHeader, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import "./KeyboardModal.css";

interface KeyboardModalProps {
    isOpen: boolean;
    name?: string;
    resultCallback(val?: number): any;
}

export const KeyboardModal: React.FC<KeyboardModalProps> = ({ isOpen, name, resultCallback }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [input, setInput] = useState<number>();

    const onChange = (val: any) => setInput(val);

    const onKeyPress = (button: any) => button === "{enter}" && resultCallback(input);

    const layout = { default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 . {enter}"] };
    const display = { "{bksp}": "<", "{enter}": "enter" };
    
    const dismiss = () => modal.current?.dismiss();

    return (
        <IonModal ref={modal} isOpen={isOpen} initialBreakpoint={1} breakpoints={[0, 1]} onDidDismiss={() => resultCallback()} color="medium">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{input || name}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => dismiss()}>Cancel</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonRow>
                <IonCol>
                    <Keyboard
                        onChange={onChange}
                        onKeyPress={onKeyPress}
                        layout={layout}
                        display={display}
                        
                    />
                </IonCol>

            </IonRow>

        </IonModal>
    )
}
function setInput(input: any) {
    throw new Error('Function not implemented.');
}

function setKeyboardOpen(arg0: boolean) {
    throw new Error('Function not implemented.');
}

