package ai.msg.adapter.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import ai.msg.adapter.process.DataMarshaller;
import ai.msg.modules.pojo.CustomReportResponse;
import ai.msg.reports.model.GetReportsResponse;

@Service
public class ReportResponseService{
@Autowired
DataMarshaller <GetReportsResponse> dataMarshaller;

ReportResponseService(){}

public String toReportResponse(GetReportsResponse getReportResponse){
	
	   CustomReportResponse customReportResponse=dataMarshaller.toReportResponsne(getReportResponse);
	try {
		return new ObjectMapper().writeValueAsString(customReportResponse);
	} catch (JsonProcessingException e) {
		e.printStackTrace();
		return null;
	}
}


}
