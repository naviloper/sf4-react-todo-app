<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FrontAppController extends AbstractController
{
    /**
     * @Route("/", name="front_app_index")
     */
    public function index()
    {
        return $this->render('front_app/index.html.twig', []);
    }
}
