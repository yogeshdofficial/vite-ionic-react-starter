import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

export default function HomeTab() {
  return (
    <IonPage>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <p className="text-orange-400">Ionic Vite</p>
        <div id="container">
          <strong>Ready to create an app?</strong>
          <p>
            Start with Ionic{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ionicframework.com/docs/components"
            >
              UI Components
            </a>
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
}
