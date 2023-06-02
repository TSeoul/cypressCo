
<body>
  <h1>Conception</h1>
  <p>
    Pendant ce projet, je me suis orientée vers les tests de la feature connexion car c'est la première étape importante concernant l'expérience utilisateur et dont le bon fonctionnement permet de tester d'autres features ensuite.
  </p>
  <p>
    La fonction de connexion étant l'un des éléments essentiels d'un site internet présente l'une des premières étapes dans le parcours utilisateur. Le but des tests effectués est de s'assurer que les utilisateurs peuvent se connecter et créer un compte avec succès, mais aussi de s'assurer que la gestion des erreurs a été mise en place pendant le développement.
  </p>
  <h2>Liste des tests effectués :</h2>
 
</body>




<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky">TEST ID</th>
    <th class="tg-0pky">TEST NAME</th>
    <th class="tg-0pky">TEST DESCRIPTION / GOALS</th>
    <th class="tg-0pky">TEST TYPE</th>
    <th class="tg-0pky">TEST TAG</th>
    <th class="tg-0pky">PREREQUISITES</th>
    <th class="tg-0pky">ASSERTIONS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">JIRA-001</td>
    <td class="tg-0pky">Connect valideUser</td>
    <td class="tg-0pky">Connect with valid credentials USER</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">login</td>
    <td class="tg-0pky">valid credentials USER</td>
    <td class="tg-0pky">The user was logged in successfully</td>
  </tr>
   <tr>
    <td class="tg-0pky">JIRA-002</td>
    <td class="tg-0pky">Connect invalideUser</td>
    <td class="tg-0pky">Connect with invalid credentials USER</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">login</td>
    <td class="tg-0pky">invalid credentials USER</td>
    <td class="tg-0pky">The error message is displayed and the user was not logged in successfully</td>
  </tr>
  
   
  </tr>
     <td class="tg-0pky">JIRA-003</td>
    <td class="tg-0pky">Connect accountAdminOK</td>
    <td class="tg-0pky">Connect with invalid credentials AdminOK</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">login</td>
    <td class="tg-0pky">valid credentials AdminOK account</td>
    <td class="tg-0pky">The user was logged in successfully</td>
  </tr>
  <tr>
    <td class="tg-0pky">JIRA-004</td>
    <td class="tg-0pky">Create personalAccount</td>
    <td class="tg-0pky">Create a valid PERSONAL account</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">subscription</td>
    <td class="tg-0pky">valid credentials PERSONAL account</td>
    <td class="tg-0pky">The personal account was created successfully</td>
  </tr>
</tbody>
</table>




