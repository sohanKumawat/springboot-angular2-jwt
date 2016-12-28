package ai.msg.adapter.process;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ai.msg.adapter.interfaces.ReportResponse;
import ai.msg.modules.pojo.CustomReportResponse;
import ai.msg.reports.model.GetReportsResponse;

@Component
public class DataMarshaller <U> implements ReportResponse<U> {
	@Autowired
	MarshallerHelper marshallerHelper;
	@Override
	public CustomReportResponse toReportResponsne(U u) {
		if(u instanceof GetReportsResponse){
			GetReportsResponse getReportResponse=(GetReportsResponse)u;
			return marshallerHelper.getReportResponseMarshalling(getReportResponse);
		}
		return null;
	}
	
	

}
