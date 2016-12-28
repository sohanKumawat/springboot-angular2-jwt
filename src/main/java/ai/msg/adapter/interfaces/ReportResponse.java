package ai.msg.adapter.interfaces;

import ai.msg.modules.pojo.CustomReportResponse;

public interface ReportResponse<U> {

   public CustomReportResponse toReportResponsne(U u);
	
}
