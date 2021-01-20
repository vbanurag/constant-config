// Alert messages

export const ALERT_MESSAGES =  {
    common: {
        success: 'Success!',
        error: 'Error!',
        yes: 'YES',
        no: 'NO',
        cancel: 'CANCEL',
        ok: 'OK',
        note: 'Note!',
        confirm: 'Please Confirm',
        sure: 'Are you sure?',
        recovery: 'If you proceed, you will lose the edits & selections!',
        info: 'Info',
        delete: 'Delete',
        deleteTitle: 'Delete Comment',
        deleteMsg: 'Are you sure you want to delete this comment ?',
        resetPwdSucess: 'Password reset successfully'
    },

    forgotPassword: {
        successMsg: 'A password reset link was sent to your email.',
        errorMsg: 'This email is not registered.',
    },

    signUp: {
        nameError: 'Please enter a valid name.',
        nameLengthError: 'Name must contain at least 5 characters and up to 80 characters.',
        emailError: 'Please enter a valid email.',
        passwordError: 'Password does not match.',
        passwordLengthError: 'Password must be at least 8 characters long.',
        emptyPasswordError: 'Password cannot be empty.',
        errorMsg: 'Something went wrong, please try again.',
        tnc: 'Please accept our Terms and Conditions to continue.',
        locationError: 'Location must be larger than 4 characters.',
        emailServerError:  "This email already exists in our system.",
        passwordConditionError: 'Password must contain 1 uppercase letter, 1 lowercase letter, 1 number and 8 characters at least.'
    },

    confirmBlock: 'Are you sure you want to block?',
    confirmDelete: 'Are you sure? If you delete, you cannot recover this album.',
    resetPassSuccess: 'Your password has been changed successfully.',
    login: 'Please login or create an account to continue...',
    createAlbum: {
        libraryErrorTitle: 'Couldn’t load your image Library/gallery',
        libraryError: 'Please go to Settings to allow MyZesty app to access your image library/gallery.',
        emptyPost: 'Please select at least one image!',
        exitPost: 'Are you sure?',
        exitPostMsg: 'By exiting, your edited media will be saved to the gallery but any other selected media will be lost. If you wish to keep the selected media and create an album, then Cancel and proceed with post',
        exitSelectMediaMsg: 'By exiting, your edited media will be saved to the gallery but any other selected media will be lost. If you wish to keep the selected media and create an album, then Cancel and proceed with =>',
        singleMedia: 'You can’t remove all of the media from the album! A posted album has to have at least one media file.',
        shareErrorTitle: 'Share Album with...',
        shareError: 'Please note that by default, your posts will be shared publicly. If you want to keep it private or with a selected audience, then change your privacy settings accordingly.',
    },
    privacyAlerts: {
        hyperlink: 'A Link is required.',
        generateHashcode: 'Generate a secret key for this album',
        createdHashcode: 'The Secret key is created',
        emptySelection: 'Please select the type of privacy.'
    },
    deleteImage: {
        title: 'Are you sure?',
        message: 'Once you delete, you will lose any changes made.'
    },
    shareAppLink: {
        title: 'MyZesty Application',
        subject: 'Download MyZesty App',
        message: 'Hey, \n MyZesty app is amazing. Get it for free at ',
    },
    shareImage: 'You can create, edit & share images or videos using #MyZesty app',
    resetPassFailed: {
        title: 'Link expired',
        message: 'Please regenerate the reset password link'
    },
};
