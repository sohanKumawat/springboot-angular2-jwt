package ai.msg.adapter.process;

import org.springframework.stereotype.Component;

import ai.msg.modules.pojo.CustomReportResponse;
import ai.msg.reports.model.GetReportsResponse;

@Component
public class MarshallerHelper {

	MarshallerHelper(){}
	
	public CustomReportResponse getReportResponseMarshalling(GetReportsResponse getReportResponse){
		CustomReportResponse customReportResponse =new CustomReportResponse();
		return customReportResponse;
	}
	
}
