import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './NewApplication.css'

export const NewApplication = ({ changePanel }) => (
  <div id="newApplication" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="newApplicationTitle">Aίτηση Εγγραφής</h3>
    <p>Για δωρεάν πρόσβαση στην υπηρεσία Web Banking της Agile Bank είναι απαραίτητη η χρήση του Ονόματος Χρήστη και του Κωδικού. Μπορείτε να υποβάλετε την αίτησή σας με τους παρακάτω τρόπους:</p>
    <ul>
      <li>τηλεφωνώντας μεταξύ των ωρών 08:00 και 21:00 (Δευτέρα έως Παρασκευή) στο 14587 ή +302115456981 (για κλήσεις από το εξωτερικό)</li>
      <li>μέσω οποιουδήποτε καταστήματός μας (κατά προτίμηση στο κατάστημα στο οποίο τηρείται ο λογαριασμός σας)</li>
    </ul>
  </div>
)

NewApplication.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default NewApplication
