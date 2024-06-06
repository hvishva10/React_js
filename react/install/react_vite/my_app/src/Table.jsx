import './App.css';
 
function Table() {
return (
<div className="Table">
<table>
       <caption><h1>countries,capital and language</h1></caption>
       <thead>
        <tr>
           <th>country</th>
           <th>capital</th>
           <th>language</th>
        </tr>
       </thead>
       <tbody>
        <tr>
            <td>india</td>
            <td>new delhi</td>
            <td>hindi</td>
        </tr>
        <tr>
            <td>france</td>
            <td>paris</td>
            <td>french</td>
        </tr>
        <tr>
            <td>new zealand</td>
            <td>wellington</td>
            <td>english</td>
        </tr>
       </tbody>
    </table>
</div>
);
}
 
export default Table;