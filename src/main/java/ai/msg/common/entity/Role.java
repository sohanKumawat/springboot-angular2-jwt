package ai.msg.common.entity;

/**
 * Enumerated {@link User} roles.
 * 
 * @author Sohan Kumawat
 *
 * Aug 16, 2016
 */
public enum Role {
    ADMIN, PREMIUM_MEMBER, MEMBER;
    
    public String authority() {
        return "ROLE_" + this.name();
    }
}
