package ai.msg.modules.interfaces;

import java.util.Optional;

import ai.msg.common.entity.User;

/**
 * 
 * @author Sohan Kumawat
 *
 * Aug 17, 2016
 */
public interface UserService {
    public Optional<User> getByUsername(String username);
}
