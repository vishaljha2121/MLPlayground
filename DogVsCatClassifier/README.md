# Dog v/s Cat classifier
### CNN Deep learning model
Convolution Neural Network(CNN) Classifier for Classifying dog and cat images. The Total number of images available for training is 8,000 and final testing is done on seperate 8,000 images.

### Dependencies

-   Jupyter notebook
-   Tensorflow 1.10
-   Python 3.6
-   Matplotlib
-   Seaborn
-   Scikit-Learn
-   Pandas
-   Numpy
Dependencies can be installed by using *server/requirement.txt* file.

### MODEL ARCHITECTURE

    cnn = tf.keras.models.Sequential()
    cnn.add(tf.keras.layers.Conv2D(filters=32, kernel_size=3,activation='relu', input_shape=[64,64,3]))
    cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))
    cnn.add(tf.keras.layers.Conv2D(filters=32, kernel_size=3, activation='relu'))
    cnn.add(tf.keras.layers.MaxPool2D(pool_size=2, strides=2))
    cnn.add(tf.keras.layers.Flatten())
    cnn.add(tf.keras.layers.Dense(units=128, activation='relu'))
    cnn.add(tf.keras.layers.Dense(units=1, activation='sigmoid'))
    
    cnn.compile(optimizer='adam', loss  =  'binary_crossentropy', metrics  = ['accuracy'])
   
## Conclusion

The Architecture and parameter used in this network are capable of producing accuracy of  **97.56%**  on Validation Data which is pretty good. It is possible to Achieve more accuracy on this dataset using deeper network and fine tuning of network parameters for training. You can download this trained model from resource directory and Play with it.
