package ai.msg.security.auth.jwt.verifier;

/**
 * 
 * @author Sohan Kumawat
 *
 * Aug 17, 2016
 */
public interface TokenVerifier {
    public boolean verify(String jti);
}
