const Helper = codecept_helper;

class PermissionHelper extends Helper {
  /**
   * Set all permissions grant for a session
   */
  grantAllPermissions() {
    const helper = this.helpers['Appium'];
    const driver = helper.browser;
    const { appPackage } = helper.options;

    helper.runOnAndroid(async () => {
      await driver.execute('mobile: changePermissions', {
        action: 'grant',
        appPackage,
        permissions: [
          'android.permission.ACCESS_FINE_LOCATION',
          'android.permission.ACCESS_COARSE_LOCATION',
          'android.permission.CAMERA',
          'android.permission.VIBRATE',
          'android.permission.INTERNET',
          'android.permission.WRITE_EXTERNAL_STORAGE',
          'android.permission.READ_EXTERNAL_STORAGE',
          'android.permission.RECEIVE_BOOT_COMPLETED',
          'android.permission.ACCESS_WIFI_STATE',
          'android.permission.ACCESS_NETWORK_STATE',
          'android.permission.READ_PHONE_STATE'
        ]
      });
    });
  }
}

module.exports = PermissionHelper;
