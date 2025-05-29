import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, GraduationCap, Globe, FileText, Calculator, BookOpen, Code, Users } from "lucide-react";

export default function ServicesSection() {
  const translationLanguages = [
    { from: "English", to: "Amharic", level: "Native" },
    { from: "English", to: "Affan Oromo", level: "Fluent" },
    { from: "English", to: "Aff-Somali", level: "Fluent" }
  ];

  const tutoringSubjects = [
    "Mathematics", "Science", "English", "Computer Science", "Languages"
  ];

  const specializations = [
    "Technical Documentation",
    "Business Communications", 
    "Academic Papers",
    "Legal Documents"
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Freelance Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging communication gaps and empowering learning through professional 
            translation and tutoring services
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Translation Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Languages className="text-white text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Translation Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Professional translation services across multiple languages with cultural 
                    sensitivity and technical accuracy.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {translationLanguages.map((lang, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-background rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-foreground font-medium">
                          {lang.from} ⟷ {lang.to}
                        </span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {lang.level}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Specializations:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {specializations.map((spec, index) => (
                      <li key={index}>• {spec}</li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mt-6 text-lg py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Request Translation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tutoring Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="text-white text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Online Tutoring</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Personalized online tutoring sessions for students from kindergarten to 
                    grade 12 across all subjects.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=200"
                    alt="Online tutoring session with student"
                    className="rounded-xl shadow-md w-full h-40 object-cover"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-background rounded-xl">
                      <div className="text-2xl font-bold text-primary mb-1">150+</div>
                      <div className="text-sm text-muted-foreground">Students Taught</div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl">
                      <div className="text-2xl font-bold text-accent mb-1">4.9/5</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Subject Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tutoringSubjects.map((subject) => (
                        <Badge
                          key={subject}
                          className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900/20 dark:text-cyan-400 text-xs font-medium"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="secondary"
                  className="w-full mt-6 text-lg py-6 font-semibold bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book Tutoring Session
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
