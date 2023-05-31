## CONNEXION / CREATION COMPTE 

TEST TYPE : Test case Positive / Test case Negative / Scenario E2E  

| TEST ID  | TEST NAME     | TEST DESCRIPTION / GOALS             | TEST TYPE          | TEST TAG   | PREREQUISITES           | ASSERTIONS |
|----------|---------------|--------------------------------------|--------------------|------------|-------------------------|------------|
| JIRA-001 | Connect Admin | Connect with valid credentials admin | Test case Positive | smoke-test | valid credentials admin |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |
|          |               |                                      |                    |            |                         |            |

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
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
   <tr>
    <td class="tg-0pky">JIRA-003</td>
    <td class="tg-0pky">Create personalAccount</td>
    <td class="tg-0pky">Create a valid PERSONAL account</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">subscription</td>
    <td class="tg-0pky">valid credentials PERSONAL account</td>
    <td class="tg-0pky">The personal account was created successfully</td>
  </tr>
   <tr>
    <td class="tg-0pky">JIRA-004</td>
    <td class="tg-0pky">Create businessAccount</td>
    <td class="tg-0pky">Create a valid BUSINESS account</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">subscription</td>
    <td class="tg-0pky">valid credentials BUSINESS account</td>
    <td class="tg-0pky">The business account was created successfully</td>
  </tr>
     <td class="tg-0pky">JIRA-005</td>
    <td class="tg-0pky">Create businessAccount</td>
    <td class="tg-0pky">Create an invalid BUSINESS account</td>
    <td class="tg-0pky">Test case Positive</td>
    <td class="tg-0pky">subscription</td>
    <td class="tg-0pky">iinvalid credentials BUSINESS account</td>
    <td class="tg-0pky">The error message is displayed and the business account was not created</td>
  </tr>
</tbody>
</table>




