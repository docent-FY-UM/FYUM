# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Exhibition(models.Model):
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    member = models.OneToOneField('Member', models.DO_NOTHING, primary_key=True)
    painting1 = models.ForeignKey('Painting', models.DO_NOTHING, blank=True, null=True)
    painting10 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting10_set', blank=True, null=True)
    painting2 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting2_set', blank=True, null=True)
    painting3 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting3_set', blank=True, null=True)
    painting4 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting4_set', blank=True, null=True)
    painting5 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting5_set', blank=True, null=True)
    painting6 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting6_set', blank=True, null=True)
    painting7 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting7_set', blank=True, null=True)
    painting8 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting8_set', blank=True, null=True)
    painting9 = models.ForeignKey('Painting', models.DO_NOTHING, related_name='exhibition_painting9_set', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'exhibition'


class Masterpiece(models.Model):
    description = models.CharField(max_length=10000, blank=True, null=True)
    painted_at = models.CharField(max_length=255, blank=True, null=True)
    painting_type = models.CharField(max_length=255, blank=True, null=True)
    technique = models.CharField(max_length=255, blank=True, null=True)
    title_kr = models.CharField(max_length=255, blank=True, null=True)
    title_origin = models.CharField(max_length=255, blank=True, null=True)
    id = models.OneToOneField('Painting', models.DO_NOTHING, db_column='id', primary_key=True)
    painter = models.ForeignKey('Painter', models.DO_NOTHING, blank=True, null=True)
    theme = models.ForeignKey('Theme', models.DO_NOTHING, blank=True, null=True)
    trend = models.ForeignKey('Trend', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'masterpiece'


class Member(models.Model):
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    kakao_id = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'member'


class MyDrawing(models.Model):
    curation = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    id = models.OneToOneField('Painting', models.DO_NOTHING, db_column='id', primary_key=True)
    member = models.ForeignKey(Member, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'my_drawing'


class Painter(models.Model):
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=10000, blank=True, null=True)
    img_src = models.CharField(max_length=255, blank=True, null=True)
    painter_kr = models.CharField(max_length=255, blank=True, null=True)
    painter_origin = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'painter'


class Painting(models.Model):
    dtype = models.CharField(max_length=31)
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    img_src = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'painting'


class Recommend(models.Model):
    member = models.OneToOneField(Member, models.DO_NOTHING, primary_key=True)
    painting1 = models.ForeignKey(Masterpiece, models.DO_NOTHING, blank=True, null=True)
    painting10 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting10_set', blank=True, null=True)
    painting2 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting2_set', blank=True, null=True)
    painting3 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting3_set', blank=True, null=True)
    painting4 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting4_set', blank=True, null=True)
    painting5 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting5_set', blank=True, null=True)
    painting6 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting6_set', blank=True, null=True)
    painting7 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting7_set', blank=True, null=True)
    painting8 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting8_set', blank=True, null=True)
    painting9 = models.ForeignKey(Masterpiece, models.DO_NOTHING, related_name='recommend_painting9_set', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'recommend'


class Survey(models.Model):
    painting = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'survey'


class SurveyAnswer(models.Model):
    res1 = models.IntegerField()
    res2 = models.IntegerField()
    member = models.OneToOneField(Member, models.DO_NOTHING, primary_key=True)

    class Meta:
        managed = False
        db_table = 'survey_answer'


class Theme(models.Model):
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    img_src = models.CharField(max_length=255, blank=True, null=True)
    theme_kr = models.CharField(max_length=255, blank=True, null=True)
    theme_origin = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'theme'


class Trend(models.Model):
    created_date_time = models.DateTimeField(blank=True, null=True)
    last_modified_date_time = models.DateTimeField(blank=True, null=True)
    description = models.CharField(max_length=10000, blank=True, null=True)
    img_src = models.CharField(max_length=255, blank=True, null=True)
    trend_kr = models.CharField(max_length=255, blank=True, null=True)
    trend_origin = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'trend'


class Wishlist(models.Model):
    member = models.ForeignKey(Member, models.DO_NOTHING, blank=True, null=True)
    painting = models.ForeignKey(Masterpiece, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'wishlist'
