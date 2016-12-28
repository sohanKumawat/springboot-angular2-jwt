package ai.msg.modules.pojo;

import java.io.Serializable;
/**
 *  Author sohan kumawat 
 */
public class CustomReportResponse implements Serializable {
	
	private static final long serialVersionUID = -4165504351081973044L;

	public CustomReportResponse(){ }
private String id;

public String getId() {
	return id;
}
public CustomReportResponse setId(String id) {
	this.id = id;
	return this;
}

	
}
