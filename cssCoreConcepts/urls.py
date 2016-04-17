from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

from cssCoreConceptsHtml import (
	introduction,
)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cssCoreConcepts.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
	url(r"\Aintroduction/\Z", introduction),
)
