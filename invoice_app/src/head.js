import jsPDF from "jspdf"
function Head()
{
    const handlePrint =  () =>{
        window.print()
      }
        const download = () => {
          document.getElementById('main').style.width = "595px";
          document.getElementById('main').style.height = "842px";
          document.getElementById('container').style.height = "100px";
         var doc= new jsPDF("p","pt","a4");
         doc.html(document.querySelector("#main"),{
    
           callback: function(pdf){
             pdf.save("invoice.pdf");
           }
        });
      }
    
        const Send = () => {
        window.send();
        }
        var printer= "p.png";
        return(
    <div  id="container">
    <heading className="head">
     <table width="100%" >
       <tr>
         <td align="left">INVOICE </td>
         <td align="right" className="element"><button className="print" onClick={handlePrint}>Print <img src={printer} alt="printer"/></button>&nbsp;&nbsp;
        <button className="download" onClick={download}> Download<img src="d.png"alt="download"/></button>&nbsp;&nbsp;<button className="send">Send<img src="s.png" alt ="send"/></button></td>
       </tr>
     </table>
       
    </heading>
 
    </div>)
}
export default Head;