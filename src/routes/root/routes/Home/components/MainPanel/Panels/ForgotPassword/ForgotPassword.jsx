import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import './ForgotPassword.css'

export const ForgotPassword = ({ changePanel }) => (
  <div id="forgotPassword" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="forgotTitle"> Ξεχάσατε το Όνομα Χρήστη / Κωδικό;</h3>
    <p>Σε περίπτωση που έχετε ξεχάσει τους κωδικούς πρόσβασης σας, μπορείτε να επικοινωνήσετε με το τηλεφωνικό κέντρο της Agile Bank μεταξύ των ωρών 08:00 και 21:00 από Δευτέρα έως Παρασκευή:</p>
    <ul>
      <li>14587</li>
      <li>+302115456981 για κλήσεις από το εξωτερικό</li>
    </ul>
    <p>ή επισκέψου οποιοδήποτε κατάστημά μας για να παραλάβετε καινούριο κωδικό.</p>
  </div>
)

ForgotPassword.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default ForgotPassword
