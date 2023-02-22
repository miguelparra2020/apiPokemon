
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader,  IonLabel,  IonPage, } from '@ionic/react';
import './Tab1.css';
// import {   flagOutline } from 'ionicons/icons';
import Toolbar from '../components/Toolbar';


const Tab1: React.FC = () => {
  // Ingresar dato del saldo actual
  let sal = 500000;
  let saldo = new Intl.NumberFormat('de-DE').format(sal);
  //Ingresar el arreglo de todos los depositos
  let depositos = [{id:1,fecha:"15-02-2023",valor:50000,concepto:"Ingreso de Dinero para prestar", comprobante: "https:google.com"},{id:2,fecha:"20-02-2023",valor:30000,concepto:"Pago Cuota N1. Credito DD01 a nombre de Jennifer", comprobante: "https:google.com"}];
  let depositosRevertidos = depositos.reverse();
  //Ingresar el arreglo de todos los retiros
  let retiros = [{id:1,fecha:"15-02-2023",valor:20000,concepto:"Retiro de Dinero para Pagar Cosas", comprobante: "https:google.com"},{id:2,fecha:"20-02-2023",valor:10000,concepto:"Retiro de Dinero a Solicitud", comprobante: "https:google.com"}];
  let retirosRevertidos = retiros.reverse();

  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        {/* Header Saldo Actual */}
        <div className='div_saldo_actual'>
        <div className='Titulo'>
          <h1>
          Saldo Actual
          </h1>
        </div>
        <div className='Titulo_Valor'>
          <h3>
          <IonChip color="success">
          ${saldo}
          </IonChip>
          </h3>
        </div>
        </div>
        {/* Header Saldo Actual */}
        {/* Contenedor */}
        <div className='contenedor_dep_reti'>
          {/* Depositos */}
          <div className='contenedor_depositos'>
          <IonCard >
            <IonCardHeader>
              <IonCardTitle>Depositos</IonCardTitle>
              <IonCardSubtitle>Total depositos: <br /><IonLabel color="success">💵 $50.000</IonLabel></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {
                depositosRevertidos.map(item =>
                  <div className='contenido_depo'>
                  <IonLabel>Id:{item.id}</IonLabel>
                  <br />
                  <IonLabel>Fecha:{item.fecha}</IonLabel>
                  <br />
                  <IonLabel>Valor:</IonLabel>
                  <IonChip color="success">
                    💵 ${new Intl.NumberFormat('de-DE').format(item.valor)}
                  </IonChip >
                  <br/>
                  <IonLabel>Concepto:{item.concepto}</IonLabel>
                  <IonButton expand="block" color="success" href={item.comprobante} target="_blank">Soporte</IonButton>
                  </div>
                )
              }
            </IonCardContent>
          </IonCard>          
          </div>
          {/* Depositos */}
          {/* Retiros */}
          <div className='contenedor_retiros'>
          <IonCard >
            <IonCardHeader>
              <IonCardTitle>Retiros</IonCardTitle>
              <IonCardSubtitle>Total retiros: <br /><IonLabel color="danger">💵 $50.000</IonLabel></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              {
                retirosRevertidos.map(item =>
                  <div className='contenido_reti'>
                  <IonLabel>id:{item.id}</IonLabel>
                  <br />
                  <IonLabel>fecha:{item.fecha}</IonLabel>
                  <br />
                  <IonLabel>Valor:</IonLabel>
                  <IonChip color="danger">
                    💵 ${new Intl.NumberFormat('de-DE').format(item.valor)}
                  </IonChip >
                  <br/>
                  <IonLabel>Concepto:{item.concepto}</IonLabel>
                  <IonButton expand="block" color="danger">Soporte</IonButton>
                  </div>
                )
              }
            </IonCardContent>
          </IonCard>     
          </div>
        </div>
        {/* Contenedor */}
            
        {/* Modal de Ejemplo */}


        {/* <IonButton expand="block" onClick={() => setIsOpen(true)}>
          Open
        </IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Deposito</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Cerrar</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
