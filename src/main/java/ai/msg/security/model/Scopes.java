package ai.msg.security.model;

/**
 * Scopes
 * 
 * @author Sohan Kumawat
 *
 * Aug 18, 2016
 */
public enum Scopes {
    REFRESH_TOKEN;
    
    public String authority() {
        return "ROLE_" + this.name();
    }
}
