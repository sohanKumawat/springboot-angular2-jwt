package ai.msg.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/* ************************* Header Comments *********************************************
 * Target : - This file used to configure static resources 
 * 
 * Author  : - Piyush
 * 
 * Update Comments
 *========================================================================================================================================
 *   s.no     Date           Comments                                Name                     Issue No & description
 *========================================================================================================================================
 *  
 *==========================================================================================================================================
 * 
 * 
 * */
@Configuration
public class ResourceConfig extends WebMvcConfigurerAdapter implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		if(!registry.hasMappingForPattern("/static/**")){
//			registry.addResourceHandler("/static/**").addResourceLocations("/static/");
//		}
		registry.addResourceHandler("/static/**").addResourceLocations("/static/");
	}

	@Bean
	public InternalResourceViewResolver getInternalResourceViewResolver() {
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/static/");
		resolver.setSuffix(".jsp");
		return resolver;
	}


    @Override
    public void addViewControllers( ViewControllerRegistry registry ) {
        registry.addViewController( "/" ).setViewName( "forward:/index.jsp" );
        registry.setOrder( Ordered.HIGHEST_PRECEDENCE );
        super.addViewControllers( registry );
    }
    @Override
    public void configureDefaultServletHandling(
            DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
	
/*

	@Override
	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
		configurer.favorPathExtension(true).parameterName("mediaType").ignoreAcceptHeader(false).useJaf(false)
				.defaultContentType(MediaType.TEXT_HTML).mediaType("xml", MediaType.APPLICATION_XML)
				.mediaType("json", MediaType.APPLICATION_JSON).mediaType("html", MediaType.TEXT_HTML);
	}

	@Bean
	public MappingJackson2HttpMessageConverter jsonConverter() {
		MappingJackson2HttpMessageConverter jsonConverter = new MappingJackson2HttpMessageConverter();
		ObjectMapper objectMapper = new ObjectMapper();
		jsonConverter.setObjectMapper(objectMapper);
		return jsonConverter;
	}

	@Bean
	public HttpMessageConverter<String> responseBodyConverter() {
		StringHttpMessageConverter converter = new StringHttpMessageConverter();
		converter.setSupportedMediaTypes(Arrays.asList(new MediaType("text", "plain", Charset.forName("UTF-8"))));
		return converter;
	}

//	@Bean
//	public LoginInterceptor LoginInterceptor() {
//		return new LoginInterceptor();
//	}

	@Bean
	public UserBeanCreationInterceptor UserBeanCreationInterceptor() {
		return new UserBeanCreationInterceptor();
	}

	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
		converters.add(jsonConverter());
		converters.add(responseBodyConverter());
		super.configureMessageConverters(converters);
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
	//	registry.addInterceptor(LoginInterceptor());
		registry.addInterceptor(UserBeanCreationInterceptor());
	} */
}
