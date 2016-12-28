package ai.msg.modules.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import ai.msg.reports.model.DateRange;
import ai.msg.reports.model.Dimension;
import ai.msg.reports.model.GetReportsRequest;
import ai.msg.reports.model.Metric;
import ai.msg.reports.model.ReportRequest;
import ai.msg.security.auth.JwtAuthenticationToken;
import ai.msg.security.model.UserContext;

@RequestMapping(value="api/v1")
@RestController
public class AnalyticsController {
	
	@Autowired
	RestTemplate restTemplate;
	
	public AnalyticsController(){
		
	}
	@RequestMapping(value="/analytics/dashboard",method={RequestMethod.GET,RequestMethod.POST})
	public @ResponseBody String fetchAnalyticsData(HttpServletRequest request,JwtAuthenticationToken token){
		System.out.println("inside the dashboard");
		GetReportsRequest getReportRequest=new GetReportsRequest();
		ReportRequest reportRequest=new ReportRequest();
		reportRequest.setViewId("VIEWID1");
		reportRequest.getDateRanges().add(new DateRange().setEndDate("2016-12-30").setStartDate("2016-12-10"));
		reportRequest.getMetrics().add(new Metric().setExpression("ga:session"));
		reportRequest.getDimensions().add(new Dimension().setName("ga:brrowser"));
		getReportRequest.getReportRequests().add(reportRequest);
		String reportResponseJson =restTemplate.postForObject("http://localhost:8080/api/v1/reports/get",getReportRequest, String.class);
		//ResponseEntity<String> result = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

		
		 return reportResponseJson;
	}
	@RequestMapping(value="/user/profile",method={RequestMethod.GET,RequestMethod.POST})
	 public @ResponseBody UserContext get(JwtAuthenticationToken token) {
	        return (UserContext) token.getPrincipal();
	    }
}
