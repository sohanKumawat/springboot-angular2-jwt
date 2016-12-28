package ai.msg.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ai.msg.common.entity.User;

/**
 * UserRepository
 * 
 * @author Sohan Kumawat
 *
 * Aug 16, 2016
 */
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u left join fetch u.roles r where u.username=:username")
    public Optional<User> findByUsername(@Param("username") String username);
}
