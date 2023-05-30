export const ErrorEnum = {
  CODE_500: 'e.server_error',
  CODE_1001: 'e.user.fonud',
  CODE_1003: 'e.user.password_incorrect',
  CODE_1005: 'e.menu.permission_include_parent',
  CODE_1006: 'e.menu.node_not_match',
  CODE_1007: 'e.menu.node_type_not_transform',
  CODE_1008: 'e.role.associate_user',
  CODE_1011: 'e.user.old_password_incorrect',

  CODE_1014: 'e.menu.parent_not_found',
  CODE_1016: 'e.system.not_allow_operation',
  CODE_1017: 'e.user.not_found',
  CODE_1018: 'e.user.exists',
  CODE_1021: 'e.system.param_config_found',
  CODE_1022: 'e.role.default_role_does_not_found',
  CODE_1023: 'e.user.password_format_not_match',
  CODE_1024: 'e.user.username_format_not_match',
  CODE_1025: 'e.user.email_format_not_match',
  CODE_1026: 'e.user.phone_format_not_match',

  // 1101-1199 Login Related
  CODE_1101: 'e.auth.login_invalid',
  CODE_1102: 'e.auth.login_expired',
  CODE_1103: 'e.auth.no_permission',
  CODE_1104: 'e.auth.not_admin',
  CODE_1105: 'e.auth.request_expired',
  CODE_1106: 'e.auth.other_login',
  CODE_1107: 'e.auth.guest_not_allow',

  // 1201-1299 Captcha Related
  CODE_1002: 'e.captcha.invalid',
  CODE_1201: 'e.captcha.request_too_fast',
  CODE_1202: 'e.captcha.send_too_many',
  CODE_1203: 'e.captcha.send_fail',

  // 1301-1399 Task Related
  CODE_1301: 'e.task.no_mission',
  CODE_1302: 'e.task.not_found',
  CODE_1303: 'e.task.execute_fail',

  // 2001-2099 Campus Related
  CODE_2001: 'e.campus.not_found',
  CODE_2002: 'e.dept.not_found',
  CODE_2003: 'e.campus.no_permission',
  CODE_2004: 'e.dept.not_campus',
  CODE_2005: 'e.dept.not_province',
  CODE_2006: 'e.campus.not_bind',
  CODE_2007: 'e.campus.email_not_match',
  CODE_2008: 'e.campus.resource_not_found',
  CODE_2009: 'e.campus_building.not_found',
  CODE_2010: 'e.dept.has_child',
  CODE_2011: 'e.campus.associate_user',
  CODE_2012: 'e.campus.associate_role',

  // 2101-2199 Course Related
  CODE_2101: 'e.course.not_found',
  CODE_2102: 'e.section.not_found',
  CODE_2103: 'e.section_mode.not_found',
  CODE_2104: 'e.subject.not_found',
  CODE_2105: 'e.professor.not_found',
  CODE_2106: 'e.evaluation.not_found',
  CODE_2108: 'e.grade.not_found',
  CODE_2110: 'e.section.found',
  CODE_2111: 'e.professor.not_in_section',
  CODE_2112: 'e.evaluation.you_not_in_course',
  CODE_2113: 'e.subject.different_campus',
  CODE_2114: 'e.professor.not_teach_in_course',
  CODE_2115: 'e.subject.not_delete_with_course',

  // 2201-2299 Schedule Related
  CODE_2201: 'e.schedule.curriculum_not_found',
  CODE_2202: 'e.schedule.time_diff_too_large',
  CODE_2203: 'e.schedule.term_not_found',
  CODE_2204: 'e.schedule.calendar_not_found',
  CODE_2205: 'e.schedule.timetable_not_found',
  CODE_2206: 'e.schedule.date_length_error',
  CODE_2207: 'e.schedule.date_format_error',
  CODE_2208: 'e.schedule.curriculum_item_not_found',

  // 2301-2399 Grade Related
  CODE_2301: 'e.grade.not_found',
  CODE_2302: 'e.grade.gpa_not_found',
  CODE_2303: 'e.grade.found',

  // 2401-2499 Comment Related
  CODE_2401: 'e.comment.not_found',
  CODE_2402: 'e.comment.parent_not_found',
  CODE_2403: 'e.comment.content_not_empty',

  // 2501-2599 Post Related
  CODE_2501: 'e.post.not_found',
  CODE_2502: 'e.post.content_not_empty',
  CODE_2503: 'e.post.type_not_found',
  CODE_2505: 'e.post.report_reason_not_empty',
  CODE_2506: 'e.post.no_login_not_allow_view',

  // 2601-2699 Collection Related
  CODE_2601: 'e.collection.not_found',
  CODE_2602: 'e.collection.name_not_empty',
  CODE_2603: 'e.collection.not_allow_view_private',
  CODE_2604: 'e.collection.name_unique',
  CODE_2605: 'e.collection.default_collection_not_delete',

  // Student Related
  CODE_3001: 'e.student.not_follow_yourself',
  CODE_3002: 'e.student.not_unfollow_yourself',
  CODE_3004: 'e.student.already_verified',
  CODE_3005: 'e.student.not_found',
  // eslint-disable-next-line prettier/prettier
} satisfies Record<string, string>;
