import { ipcMain } from 'electron';
import noble from 'noble';


noble.on('stateChange', (state) => {
  console.log(state);
});


ipcMain.on('startBLEScan', (event, args) => {
  console.log('Starting to scan');
  noble.startScanning();
  event.sender.send('acknowledgeBLEScan', true);
})
