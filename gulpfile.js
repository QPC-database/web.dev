/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const gulp = require('gulp');
const copyDefaultLocale = require('./gulp-tasks/copy-default-locale.js');
const copyFonts = require('./gulp-tasks/copy-fonts.js');
const copyGlobalImages = require('./gulp-tasks/copy-global-images.js');
const copyMisc = require('./gulp-tasks/copy-misc.js');
const sassTask = require('./gulp-tasks/sass.js');
const sassNextTask = require('./gulp-tasks/sass-next.js');
const writeVersion = require('./gulp-tasks/write-version.js');

gulp.task('default-locale', copyDefaultLocale);
gulp.task('copy-misc', copyMisc);
gulp.task('sass', sassTask);
gulp.task('sass-next', sassNextTask);

gulp.task(
  'build',
  gulp.parallel(
    copyGlobalImages,
    copyMisc,
    copyFonts,
    sassTask,
    sassNextTask,
    writeVersion,
  ),
);

gulp.task('watch', () => {
  gulp.watch('./src/images/**/*', {ignoreInitial: true}, copyGlobalImages);
  gulp.watch('./src/misc/**/*', {ignoreInitial: true}, copyMisc);
  gulp.watch('./src/styles/**/*.scss', {ignoreInitial: true}, sassTask);
  gulp.watch('./src/scss/**/*.scss', {ignoreInitial: true}, sassNexTask);
});
