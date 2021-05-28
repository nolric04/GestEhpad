package vue;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import modele.Evenement;

/**
 * Servlet implementation class ViewEvent
 */
@WebServlet("/ViewEvent")
public class ViewEvent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewEvent() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		Evenement e = (Evenement) session.getAttribute("evenement");
		
		
		System.out.println(e.getId());
		
		
		out.println("<p style=' \r\n"
				+ "                 \r\n"
				+ "                font-family:cambria;'>Niveau d'importance :</p>");
		out.println("<div style=' \r\n"
				+ "                '><input type='text' value='"+e.getGravite()+"'></input></div>");
		out.println("<p style= \r\n"
				+ "                \r\n"
				+ "                font-family:cambria;'>Date :</p>");
		out.println("<div style=' \r\n"
				+ "                '><input type='text'value='"+e.getDateEmission()+"'></input></div>");
		out.println("<div>\r\n"
				+ "            <input type='text' style='\r\n"
				+ "                \r\n"
				+ "                height: 45px;' placeholder=\"Declarant\" value='"+e.getDeclarant()+"'></input>\r\n"
				+ "        </div>");
		out.println(
				"<form name='formul' action='/CreationEvenement\' method='GET'><input type='text' style=' \r\n"
				+ "                \r\n"
				+ "                width:400px; \r\n"
				+ "                height:25px;' name='input_text' value='"+e.getTitre()+"'></input><br>"
						+ "<input type=text style=' \r\n"
						+ "                \r\n"
						+ "                width:400px; \r\n"
						+ "                height: 70px;'name='input_text' placeholder=\"Description\" value='"+e.getDescription()+"'></input></form>");
		out.println("<p style='font-family:cambria'>Résidents Concernés :</p>");
		if(e.getListeResident().size() != 0) {
		
			out.println(
				"<table style=' border:1px; \r\n"
				+ "                color: black;\r\n"
				+ "                font-family:cambria'>"
						+"<th style='font-family:cambria'>Nom</th>"
						+ "<th style='font-family:cambria'>Prenom</th>"
						+ "<th style='font-family:cambria'>DateDeNaissance</th>"
						+ "<th style='font-family:cambria'>NuméroSecu</th>"
						+ "<th>Chambres</th>");
		
				for(int i = 0 ; i < e.getListeResident().size() ; i++) {
					out.println("<tr><td>"+e.getListeResident().get(i).getNom()+"</td>"
							+ "<td>"+e.getListeResident().get(i).getPrenom()+"</td>"
							+ "<td>"+e.getListeResident().get(i).getDateNaissance()+"</td>"
							+ "<td>"+e.getListeResident().get(i).getNumSecu()+"</td>"
							+ "<td>"+e.getListeResident().get(i).getNumChambre()+"</td>"
							+"</tr>");
				}
				
				out.println("</table>");
			}
		else {
			out.println("<p>Aucun</p>");
		}
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
