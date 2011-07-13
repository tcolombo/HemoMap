
    package com.info2dev.HemoMap;

    import android.app.Activity;
    import android.os.Bundle;
    import com.phonegap.*;

    public class HemoMap extends DroidGap
    {
        @Override
        public void onCreate(Bundle savedInstanceState)
        {
            super.onCreate(savedInstanceState);
            // Ajout d'un splash screen à la place de l'écran blanc
            super.setIntegerProperty("splashscreen", R.drawable.splash); 
            super.loadUrl("file:///android_asset/www/index.html", 1000);
        }
    }
    
